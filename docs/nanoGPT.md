# NanoGPT

A quick test for video transcription and nanoGPT training for Glean search.

Goals:
* Introduction in the model training and the GPT workflow
* Get hands-on with the CLI and open source tools (enough slides and high-level presos) 
* Train the ML model with the data and sample it

Problem. The audio shared by SMEs in training videos is not searchable in Glean. 

Hypothesis. If audio data is transcribed from a movie and trained into the nanoGPT language model, the data can be sampled and ultimately fed into Glean’s search through a connector.

nanoGPT. [Andrej Karpathy](https://en.wikipedia.org/wiki/Andrej_Karpathy) developed it as a streamlined rendition of the GPT language model, a transformative deep learning architecture in natural language processing. Unlike the resource-intensive GPT models from OpenAI, nanoGPT is engineered to be lightweight and easily deployable, even on modest hardware setups.

Tutorials:
[Let's build GPT: from scratch, in code](https://www.youtube.com/watch?v=kCc8FmEb1nY)

[No local GPU? No Problem! Running Andrej Karpathy’s NanoGPT on Modal.com](https://dev.to/mcapodici/no-local-gpu-no-problem-running-andrej-karpathys-nanogpt-on-modalcom-3h42)

[Exploring NanoGPT](https://www.dolthub.com/blog/2023-02-20-exploring-nanogpt/)

## Transcribe audio to a text file

Identify a video. Ryan and Mohak kickoff conversation
Transcribe audio using Adobe Premiere and save to text file and csv:
	- HW25_LIVE_SHOW-KICKOFF_RYAN-2025_01_14-V1_B.txt
	- HW25_LIVE_SHOW-KICKOFF_RYAN-2025_01_14-V1_C.csv

Inspect the data set that will be used to train on:

```
00:00:12:00 - 00:00:42:17
Unknown
I'm super excited about kicking off Hacker Week today. And who better to kick it off with than the chief agitator of every hack at LinkedIn? Ryan Rozanski The username that there was a lot of passive aggressiveness in that intro.

00:00:42:22 - 00:01:01:03
Unknown
I wasn't meant to be passive. I'll I'll build it up a bit. Wow. I'm not sure. How about a Ron's children and thinking that innovation means break the law. That was one of my favorite things that I saw. By the way, we've been sending the funding around to, like, regulators to talk to regulators. Yeah. Yeah, exactly. my goodness.

```

Gotchas to note:
Audio capture quality. Is this English detected or a different language?
Jargon dictionary. Is Espresso a coffee drink or a document storage system?
Final quality check before publishing. A 50% error rate is common. Is that “good enough”?

## Procedure overview

Follow the steps for a Macbook CPU (not Nvidia GPU) in the Readme at https://github.com/karpathy/nanoGPT/blob/master/README.md

4 steps to this hack:

1. Installation
2. Prepare the dataset for character-level language modeling
3. Train a miniature character-level model
4. Take a sample from the trained model


## Installation

1. Clone the nanoGPT repo to local, https://github.com/karpathy/nanoGPT
2. Install library dependencies:

```
$ pip install torch numpy transformers datasets tiktoken wandb tqdm
```

[torch](https://pypi.org/project/torch/) contains data structures for multi-dimensional tensors and defines mathematical operations over these tensors. Strong support for NVIDIA GPU with compute capability >= 3.0. PyTorch is a machine learning library based on the Torch library, used for applications such as computer vision and natural language processing, originally developed by Meta AI and now part of the Linux Foundation umbrella. Watch [PyTorch in 100 Seconds](https://www.youtube.com/watch?v=ORMx45xqWkA)

[numpy](https://pypi.org/project/numpy/) is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.

[transformers](https://pypi.org/project/transformers/) provides thousands of pretrained models to perform tasks on different modalities such as text, vision, and audio.

[datasets](https://pypi.org/project/datasets/) is a lightweight library providing two main features: one-line dataloaders for many public datasets.

[tiktoken](https://pypi.org/project/tiktoken/) is a fast open-source tokenizer by OpenAI. 

[wandb](https://pypi.org/project/wandb/) (Weights & Biases) is a powerful tool for tracking and visualizing machine learning experiments.

[tqdm](https://pypi.org/project/tqdm/) is a Python library that provides a fast, extensible progress bar for loops and iterables, making it easy to visualize the progress of your code.

## Downgrade numpy from 2 to 1

Problem:
```
A module that was compiled using NumPy 1.x cannot be run in
NumPy 2.0.2 as it may crash. To support both 1.x and 2.x
versions of NumPy, modules must be compiled with NumPy 2.0.
Some module may need to rebuild instead e.g. with 'pybind11>=2.12'.

If you are a user of the module, the easiest solution will be to
downgrade to 'numpy<2' or try to upgrade the affected module.
We expect that some modules will need time to support NumPy 2.
```

Solution. Followed this [SO procedure](https://stackoverflow.com/questions/78641150/a-module-that-was-compiled-using-numpy-1-x-cannot-be-run-in-numpy-2-0-0).

```
pip uninstall numpy
pip install numpy==1.26.4
pip list
```

Reopen the terminal shell

## Input data swap

Change the text data from Shakespeare to Hackday audio src
Open /data/shakespeare_char/input.txt
Add new data
Save as the same file name

Note: I saved the original shakespeare file as “ShakespeareBakforInput”

## Prepare

Prepare the dataset for character-level language modeling:

```
$ python3 data/shakespeare_char/prepare.py


length of dataset in characters: 13,976
all the unique characters: 
 %&',-.0123456789:?ABCDGHILMNOPQRSTUVWYabcdefghijklmnopqrstuvwxyz
vocab size: 66
train has 12,578 tokens
val has 1,398 tokens
```

This turns the file from raw text into one large stream of integers.

This creates a train.bin and val.bin in that data directory.

## Train

Train a miniature character-level model using the Hackday audio data. I only have a macbook CPU (no GPU). No worries, we can still train a GPT but we want to dial things down a notch:

```
$ python3 train.py config/train_shakespeare_char.py --device=cpu --compile=False --eval_iters=20 --log_interval=1 --block_size=64 --batch_size=12 --n_layer=4 --n_head=4 --n_embd=128 --max_iters=2000 --lr_decay_iters=2000 --dropout=0.0
```

Here, since we are running on CPU instead of GPU we must set both --device=cpu and also turn off PyTorch 2.0 compile with --compile=False. Then when we evaluate we get a bit more noisy but faster estimate (--eval_iters=20, down from 200), our context size is only 64 characters instead of 256, and the batch size only 12 examples per iteration, not 64. We'll also use a much smaller Transformer (4 layers, 4 heads, 128 embedding size), and decrease the number of iterations to 2000 (and correspondingly usually decay the learning rate to around max_iters with --lr_decay_iters). Because our network is so small we also ease down on regularization (--dropout=0.0). This still runs in about ~3 minutes, but gets us a loss of only 1.88 and therefore also worse samples, but it's still good fun.

Note: The config file is at /nanoGPT-master/config/train_shakespeare_char.py. As a test, try changing the display comment to “# Greg's baby GPT model :)” and watch it print on the terminal.

Display output:

```
Overriding config with config/train_shakespeare_char.py:
# train a miniature character-level shakespeare model
# good for debugging and playing on macbooks and such
out_dir = 'out-shakespeare-char'
eval_interval = 250 # keep frequent because we'll overfit
eval_iters = 200
log_interval = 10 # don't print too too often
# we expect to overfit on this small dataset, so only save when val improves
always_save_checkpoint = False
wandb_log = False # override via command line if you like
wandb_project = 'shakespeare-char'
wandb_run_name = 'mini-gpt'
dataset = 'shakespeare_char'
gradient_accumulation_steps = 1
batch_size = 64
block_size = 256 # context of up to 256 previous characters
# Greg's baby GPT model :)
n_layer = 6
n_head = 6
n_embd = 384
dropout = 0.2
learning_rate = 1e-3 # with baby networks can afford to go a bit higher
max_iters = 5000
lr_decay_iters = 5000 # make equal to max_iters usually
min_lr = 1e-4 # learning_rate / 10 usually
beta2 = 0.99 # make a bit bigger because number of tokens per iter is small
warmup_iters = 100 # not super necessary potentially
# on macbook also add
# device = 'cpu'  # run on cpu only
# compile = False # do not torch compile the model
Overriding: device = cpu
Overriding: compile = False
Overriding: eval_iters = 20
Overriding: log_interval = 1
Overriding: block_size = 64
Overriding: batch_size = 12
Overriding: n_layer = 4
Overriding: n_head = 4
Overriding: n_embd = 128
Overriding: max_iters = 2000
Overriding: lr_decay_iters = 2000
Overriding: dropout = 0.0
tokens per iteration will be: 768
found vocab_size = 66 (inside data/shakespeare_char/meta.pkl)
Initializing a new model from scratch
number of parameters: 0.80M
```

Let the training run for 3 minutes. 

```
step 0: train loss 4.2025, val loss 4.2041
iter 0: loss 4.1997, time 554.35ms, mfu -100.00%
iter 1: loss 4.1916, time 56.27ms, mfu -100.00%
…
iter 1999: loss 0.2432, time 24.95ms, mfu 0.04%
step 2000: train loss 0.2364, val loss 3.1086
iter 2000: loss 0.2456, time 465.56ms, mfu 0.03%
```

## Sample

Take a sample from the trained model. 

```
$ python3 sample.py --device=cpu --out_dir=out-shakespeare-char
```

The new Hackday data is displayed in the output, but notice it is very scrambled. Don’t know why yet.

```
Overriding: device = cpu
Overriding: out_dir = out-shakespeare-char
number of parameters: 0.80M
Loading meta from data/shakespeare_char/meta.pkl…


Unknown
So alte that ingout eex. havered ahat of thingh at weere that ight worke at ay sof sing ait it of the thir the buit king ang this ight fror thes to a neffilllkes ike ins lof ike that the spaprrstantsss  liffort iduring theat  a build ayquallllld you and sofor wnd sof to ind smer and that a thoughters tseay and toe mpalaboy ing that us for thing woulld you ackuabld inn on menthis ur thsp's a insis irs igouint. And ayou I anrnd weas ther sure gour to lp idof or thow as siffrrt the wad the 
---------------
00:34:09
Unknown
The ititerarea of tharf peatid in on of ther woit a of the that as thir and iveallld iof is arded seaurto of tho wabld ingh that irs ideay, innn of tha t you1000:28 theng irt ferratearns was a you know ghought ts wise compan or and us cuand that wort eat id nof that ind you the ware of mpany induct ad the peop inding srisating that lifrorng, it you ing thirgs of mfor fim akey ing sof sspert stoges int if whits rof th  beavat in's waiund thing is is of thirds, you I we that irkin
---------------
```

## Next steps

Train the full data on a GPU in the cloud via https://modal.com/ for $5
Clean the data
Create a Glean connector
UI mockup for the Glean experience:


## Test the training loop 

on the model using Shakespeare data src to create a checkpoint ML file (ckpt.pt)
python3 data/shakespeare_char/prepare.py

```
python3 train.py config/train_shakespeare_char.py --device=cpu --compile=False --eval_iters=20 --log_interval=1 --block_size=64 --batch_size=12 --n_layer=4 --n_head=4 --n_embd=128 --max_iters=2000 --lr_decay_iters=2000 --dropout=0.0
```


Let the training run for 2 minutes. Here is the output, and the CPU is running high:

```
step 0: train loss 4.1676, val loss 4.1649
iter 0: loss 4.1828, time 612.15ms, mfu -100.00%
…
step 2000: train loss 1.7648, val loss 1.8857
saving checkpoint to out-shakespeare-char
iter 2000: loss 1.6958, time 492.64ms, mfu 0.04%
```


The checkpoint file is saved to out-shakespeare-char/ckpt.pt

A "checkpoint file" is a file that stores the current state of a machine learning model during training, essentially acting as a snapshot of the model's parameters (weights) and optimizer state at a specific point in time, allowing you to resume training from that point if needed, like after a system failure, or to load a partially trained model for further fine-tuning or inference. 

Key points about checkpoint files:

Purpose: They enable the ability to restart training from a previous point instead of starting from scratch, which is crucial for large models that can take a long time to train. 

What's stored: A checkpoint file typically contains the model's weights, the optimizer's state (like learning rate), and sometimes additional metadata like training epoch number. 

When to use: Checkpoints are often saved periodically during training at regular intervals, allowing you to revert to a previous state if something goes wrong. 

File format: The format of a checkpoint file depends on the machine learning framework used (e.g., PyTorch uses .pth files, TensorFlow might use .ckpt). 
