---
layout: page
title: Git
permalink: /git/
resource: true
---

The Git protocol was created by [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds). He also created the original Linux kernel.

# Installation
 
 Xcode and CLI tools. You might encounter an error message prompting you to install Xcode (or its command line developer tools) because Git relies on some underlying libraries and tools that are bundled with Xcode on macOS

 Go to the Apple Developer Downloads page (developer.apple.com/download/) and download the CLI tools.


# Michael North's git workflow tutorial

Mike's demo
-----------
https://bluejeans.com/s/Odc5EOJ2r68/

Minimum viable workflow:

Get a local copy of a multiproduct
Prepare a review branch containing that change
Make a local code change
Create a pull request
Get a code review
Merge the change into the code base


====================================

I. Get a local copy of a multiproduct

$ mint checkout example-w1-python-cli
✔ example-w1-python-cli checked out to /Users/gmcmilla/github/example-w1-python-cli_trunk

Go to the MP backend and get the git repo that has already been migrated to GH. I now have my local copy. 

$ cd example-w1-python-cli_trunk/
gmcmilla-mn2:example-w1-python-cli_trunk gmcmilla$

We know it's an MP because it always ends with trunk


====================================

II. Prepare a review branch containing that change

As a best practice, checkout a branch at the very beginning of my workflow and make my commits on that branch. This way I can always return to a clean master if needed. This approach also supports a good starting point for any new task I may need to pick up.

1. Create a new branch and prefix that branch with my username. The -b creates the branch. The checkout command is context aware:

$ git checkout -b gmcmilla/new-readme-md
Switched to a new branch 'gmcmilla/new-readme-md'

Include my username in the branch name. When there are many users collaborating on a code base, users can collide with identically named branches already on GH, or it can be difficult to find my own branch. A username makes a much smaller haystack of branches to search through. Use a forward slash (/) in the branch name because there are many Git UIs that will treat this as a folder.


2. Issue git log to confirm my commit is on the new branch (HEAD -> gmcmilla/new-readme-md, master). The "HEAD" is a "you are here" indicator on the new branch and master is here with me.

```
$ git log
commit 2c749fd6d7279d27c324375f878ca2898272cc72 (HEAD -> gmcmilla/new-readme-md, master)
Author: Greg McMillan 
Date:   Wed Sep 2 17:51:24 2020 -0700

    Add a new README.md

Tip. Do this to get master back to the official clean copy (what everyone else sees):

git checkout master
git fetch
git reset --hard origin/master
```

====================================

III. Make a local code change

1. Add a README.md file

2. Display the status of my local working environment:

```
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md

Nothing added to commit but untracked files present (use "git add" to track)
```

It tells me I have an untracked file. As far a git knows, this file has nothing to do with my project.  


3. Add the file to the project:

```
$ git add README.md
```

Now I have a new file that's part of the project. Before, this file was untracked:

```
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   README.md
```

4. The file is saved to disk, but it's not part of my git history yet. So, introduce a new commit by making a new unit of code change.

Currently, I'm on the master branch:

```
$ git branch
* master
```

Create a commit:

```
$ git commit -m "Add a new README.md"
[master 2c749fd] Add a new README.md
 1 file changed, 75 insertions(+)
 create mode 100644 README.md
```

Run git log to display the history. At 17:51, I made a code change that's described as "Add a new README.md"

```
$ git log
commit 2c749fd6d7279d27c324375f878ca2898272cc72 (HEAD -> master)
Author: Greg McMillan 
Date:   Wed Sep 2 17:51:24 2020 -0700

    Add a new README.md

commit 7e12b0a6d089aeeea86a93b4eb9d52e295809e1d (tag: example-w1-python-cli_0.0.0, origin/master, origin/HEAD)
Author: Prince S. Valluri 
Date:   Thu Aug 13 18:21:25 2020 -0700

    Initial commit of example-w1-python-cli
```

Note that my master (HEAD -> master) is ahead of GH's master (tag: example-w1-python-cli_0.0.0, origin/master, origin/HEAD). That is, the last I saw of GH's master. I'm further ahead in history.


====================================

IV. Create a pull request

1. Push my branch and deliver its code to a git remote:

```
$ git push -u origin gmcmilla/new-readme-md
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.64 KiB | 1.64 MiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: This repository moved. Please use the new location:
remote:   git@linkedin.githubprivate.com:multiproduct/example-w1-python-cli.git
remote: 
remote: Create a pull request for 'gmcmilla/new-readme-md' on GitHub by visiting:
remote:      https://linkedin.githubprivate.com/multiproduct/example-w1-python-cli/pull/new/gmcmilla/new-readme-md
remote: 
To ssh://linkedin.githubprivate.com/multiproducts/example-w1-python-cli.git
 * [new branch]      gmcmilla/new-readme-md -> gmcmilla/new-readme-md
Branch 'gmcmilla/new-readme-md' set up to track remote branch 'gmcmilla/new-readme-md' from 'origin'.
```

The -u argument refers to tracking an upstream branch. My local branch tracks the copy that I pushed to GH. The -u frees me from having to be so specific about my pushes in the future. When I make a future commit, I'll just need to run git push. The system will understand that I want to push to the same branch with the same name on GH. From now on, this is where I want to push.

The "remote:" prefix refers to activity on the remote side (not local). It's response feedback coming from GH.

"[new branch]" refers to the new branch that was created on GH. The tiny arrow (->) indicates that tracking is enabled. The local branch feeds into the remote branch.

Tip. Use "git branch -av" to list all of my branches and show which ones are tracking (->) a remote branch. This is useful for cleaning up my local workspace periodically.

```
$ git branch -av
* gmcmilla/new-readme-md                2c749fd Add a new README.md
  master                                2c749fd [ahead 1] Add a new README.md
  remotes/origin/HEAD                   -> origin/master
  remotes/origin/gmcmilla/new-readme-md 2c749fd Add a new README.md
  remotes/origin/master                 7e12b0a Initial commit of example-w1-python-cli
  remotes/origin/psvallur-patch-1       f3ee80e Create README.md
  remotes/origin/sfriend/myupdate       603c263 add to docs
```

2. Go to the URL displayed to begin the process of opening a pull request. 

https://linkedin.githubprivate.com/multiproduct/example-w1-python-cli/pull/new/gmcmilla/new-readme-md

You are at the pull request creation screen, where the title matches your commit message. The title can be changed if you desire.

A pull request text template, as defined by a referenced file, populates the write body. The template uses Github Flavored Markdown (GFM), which includes HTML comments.

3. Click "Create pull request"

￼

Alternatively, you can create a draft pull request to request a last-minute sanity review from a fellow developer. It's a pre-review before the formal review begins. A draft pull request has a unique ID and can be shared with others on Slack for collaboration. Drafts cannot be merged.

Look in the "Review requested" area for all of the signals about whether the code is or is not suitable for merge. The problems are listed here.

￼

Owner Approval means I have touched code that is managed by an ACL, and I must get an owner approval in order to merge it.

Pre-merge is similar to mint validate. 

Working Copy Test is similar to wc-test. 

Changes to Resolution is company policy that enables non-owners to raise issues, where the author must respond or explicitly dismiss. A no response it not allowed. 

Tip. git remote -v informs me that I have a remote called origin. Origin is the central source of truth. It was set up for me as part of mint clone (or mint checkout). It's using ssh to communicate with linkedin.githubprivate.com.

$ git remote -v
origin	ssh://git@linkedin.githubprivate.com/multiproducts/example-w1-python-cli.git (fetch)
origin	ssh://git@linkedin.githubprivate.com/multiproducts/example-w1-python-cli.git (push)

====================================

V. Get a code review

PR authors cannot approve their own pull requests; only MP owners can do it.

1. Add reviewers to the PR by using the Reviewers drop down menu:

￼

Reviewers are email notified, or you can send the PR's URL directly:

https://linkedin.githubprivate.com/multiproduct/example-w1-python-cli/pull/3

Tips:

o The Files changed tab describes the code changes to be approved.

o Comments can be added in the gutter.


2. On the Write tab, an approver will select Approve > Submit review:

￼


Tips. 

o To update the PR with new staged changes in the review branch, use git add, git commit, and git push. Because you are already tracking the upstream branch, only a git push (with no -u) is required. Git remembers the destination.

o To re-request a review from someone, click the circular refresh icon:

￼



====================================

VI. Merge the change into the code base

When Owner Approval turns green and the required checks pass (Details displays the list of ACL owners):

￼

click Squash and merge to merge your code into master and officially make it part of the multiproduct:

￼

The timeline reports the number of checks that passed before the merge was initiated:

￼

See also the post-merge validation (PCL) that's running on master after the merge:

￼

When it succeeds, it looks like this:

￼

If things go bad for you, click the Revert button to create a new branch and reverse (rollback) the change:

￼


Updating a PR by Amending to the Previous Commit
The cleanest way to update files and push up the changes to the same PR is as follows:
	1	Ensure you’re on the same branch in your local environment as the PR’s branch
	2	Modify your files
	3	Run git add -A in terminal
	4	Run git commit --amend --no-edit. This will bring in your updates to your previous commit. Note that the dashes before amend and no-edit should be 2 dashes in a row.
	5	Run git push -f
	6	Validate your updates are reflected in the PR

Updating master to latest
Tip. Do this to get master back to the official clean copy (what everyone else sees):

```
git checkout master
git reset --hard origin/master
git fetch
git pull --rebase
```

## Switching to a Different Branch

Use ``git checkout <branch-name>`` to switch between branches:

```
$ git checkout master
Switched to branch 'master'
Your branch is behind 'origin/master' by 12 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

## Updating .git

Use git fetch to update your .git directory with all commit history from the remote branch that does not exist in your local repository. This command will not change any local content files:

```
$ git fetch
remote: Counting objects: 1143, done.
remote: Compressing objects: 100% (108/108), done.
remote: Total 1143 (delta 243), reused 259 (delta 208), pack-reused 824
Receiving objects: 100% (1143/1143), 498.89 KiB | 6.93 MiB/s, done.
Resolving deltas: 100% (608/608), completed with 21 local objects.
From github.com:MicrosoftDocs/linkedin-apidocs-test
   4b5c50c..74dc91b  master          -> origin/master
 * [new branch]      djacob          -> origin/djacob
 * [new branch]      ekrbranch2      -> origin/ekrbranch2
 * [new branch]      jbotest         -> origin/jbotest
   b89e22c..5497f2e  new-test-branch -> origin/new-test-branch
 * [new branch]      nkamadolli      -> origin/nkamadolli
```

Pull in changes from the master branch into your existing local branch
Pull in changes from the master branch into your existing local branch after you’ve created a PR. (only needed if you want to make further changes to this PR)

```
$ git checkout master
$ git pull --rebase (note: DO NOT use "git pull" by itself!)
$ git checkout <PR branch name>
$ git pull --rebase (only needed if Freshness Guardian or others have committed to the PR branch)
$ git merge master (only needed if other changes have been merged by others in the meantime.)
(resolve any conflicts if needed...)
$ git push (push to remote branch, PR gets automatically updated)
Note: if "git push" fails saying your local branch is behind, do a "git pull --rebase" and try again. Do not do a "git pull"!
```

# Access

repo, https://github.com/gmcmillan100/docs

pages, https://gmcmillan100.github.io/docs/

Test ssh access:

```
$ ssh -T git@github.com
Hi gmcmillan100! You've successfully authenticated, but GitHub does not provide shell access.
```

# Branch out of sync with master

Do this to bring the lastest changes in master into your local Git branch:

git checkout master
git pull
git checkout ``<your-branch-name>``
git rebase master

# Setup Workflow

Global config:

```
git config --global user.email "gmcmillan100@gmail.com"
git config --global user.name "Greg McMillan"
```

Verify the global `.gitconfig` looks correct:

```
$ cat .gitconfig
# This is Git's per-user configuration file.
[user]
	name = gmcmillan100
	email = gmcmillan100@gmail.com
```

Initialize repo and pull down a copy:

~~~~
mkdir docs
cd docs
git init .
git remote add origin git@github.com:gmcmillan100/docs.git
cat .git/config
git pull git@github.com:gmcmillan100/docs.git master
~~~~

Push the current branch and set the remote as upstream:

~~~~
git fetch
git branch --set-upstream-to=origin/master master
~~~~

Upload some changes:

~~~~
git add git.md
git commit -m "initial commit"
git pull --rebase
git push
~~~~

# SSH Keys

Main article: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-linux

Generate a new ssh key:

~~~~
$ ssh-keygen -t rsa -b 4096 -C "gmcmillan100@gmail.com"
Generating public/private rsa key pair.

Enter file in which to save the key (/home/greg/.ssh/id_rsa): Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/greg/.ssh/id_rsa.
Your public key has been saved in /home/greg/.ssh/id_rsa.pub.
The key fingerprint is:
ef:63:96:f2:47:90:76:69:27:ab:62:9b:d9:df:67:ea gmcmillan100@gmail.com
The key's randomart image is:
+--[ RSA 4096]----+
|                 |
|                 |
|           . .   |
|          + = .  |
|        S. + +   |
|         .  o    |
|          .+     |
|        +=* ..  o|
|       .+B++..E+ |
+-----------------+
~~~~

Display existing key files:

~~~~
$ ls -al ~/.ssh
total 20
drwx------  2 greg  greg   512 Jan  2 15:27 .
drwxr-xr-x  4 greg  greg   512 Jan  1 07:12 ..
-rw-------  1 greg  greg  3326 Jan  2 15:27 id_rsa
-rw-r--r--  1 greg  greg   748 Jan  2 15:27 id_rsa.pub
-rw-r--r--  1 greg  greg  1014 Jan  2 15:17 known_hosts
~~~~

Start the ssh-agent and add the new key:

~~~~
$ eval "$(ssh-agent -s)"
Agent pid 1034

$ ssh-add ~/.ssh/id_rsa
Enter passphrase for /home/greg/.ssh/id_rsa: 
Identity added: /home/greg/.ssh/id_rsa (/home/greg/.ssh/id_rsa)
~~~~

Display the new public key:

~~~~
$ cat ~/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDF+17iqUOfTtcjlAEDFBNh23qXqn7WGVaXqKMEMIOtezOrHTsS4TF1vLE0aQDXKjlv1JKi1PBm5ueIr+xe+WTswXRjg5dU2iijkeBLVZKo//7HCXY+W5nNO0wCKMNmnng2JwzhGW28FpwafnuhbHahzL1R8fkYUms4qsYQCoMP+femNr1aWEv9nOs7atpXjugrmhQXwZmuUOkci3pYmOXrrDZxko2EVMaSA03mN48uxQ0ZbPn6L06gzu26cZa2Wip79NmlT/+Ilc8qnjH0MahHpXe1k/fX+3VT9IYMomekOP5jTFuZpNtzrzukSnmkjBABH7Esgo+6TSp3vjOVBm8mEQk4KvUyc8s+POY4jrZr8Z8SRFQAo6XfSs0jPhxe7VIkwIt0oV1jOb0g0x/tudpf/byFWjqmQcFh27MIzf4rsPBt+sP6Tyg59Fn6nqC0UhofuxY3rkLtVnBK6VtiKoPdK1xkSJ4vRi7GzOOMe3txOClR9k0Afdj3Oa9q8GTbXjXc65NsMj33eoHnl/f1O1nHo7gFBaPBDvaSCf16sJ6UwrLy2ZfH0cJuFk9Vfp24Sb8L5o5IL8EoY3ydX1UpXEVtxU4140780mWZKgfThxGjO5xTygLs8BcymkN0ZS+RGrocH7sTf7LIzikY1cGBeBs60BaOs90sxROjPnwpTIXqRQ== gmcmillan100@gmail.com
~~~~

# Test key-account auth

After adding the key to github.com > settings, verify Github can see the key-account mapping from my local host:

```
$ ssh -T git@github.com
Hi gmcmillan100! You've successfully authenticated, but GitHub does not provide shell access.
```

Can also use `-i` for more control:

```
$ ssh -i ~/.ssh/id_rsa -o IdentityAgent=none -T git@github.com
Hi gmcmillan100! You've successfully authenticated, but GitHub does not provide shell access.
```
and notice how this key produces a different user response:

```
$ ssh -i ~/.ssh/gmcmilla_at_linkedin.com_ssh_key -o IdentityAgent=none -T git@github.com
Hi gmcmilla_LinkedIn! You've successfully authenticated, but GitHub does not provide shell access.
```

# Cloning

git clone git@github.com:gmcmillan100/docs.git

# Multiple SSH keys for different accounts

Problem. During a `git push` in my personal `docs` repo, git was using my work ssh key and user identity. My personal key identity was not being used, resulting in no access.

```
$ cd /Users/gmcmilla/docs
$ git push
ERROR: Permission to gmcmillan100/docs.git denied to gmcmilla_LinkedIn.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

But outside of `git push` and the repo, my personal ssh key could authenticate with github.com when the key file is read directly:

```
$ cd ~
$ ssh -i ~/.ssh/id_rsa -o IdentityAgent=none -T git@github.com
Hi gmcmillan100! You've successfully authenticated, but GitHub does not provide shell access.
```

`ssh -vv` revealed that only my work SSH key was being used:

```
$ ssh -vv -T git@github.com
OpenSSH_9.4p1, LibreSSL 3.3.6
...
debug1: identity file /Users/gmcmilla/.ssh/gmcmilla_at_linkedin.com_ssh_key type 0
debug1: identity file /Users/gmcmilla/.ssh/gmcmilla_at_linkedin.com_ssh_key-cert type -1
```
and `IdentityFile` was set to my work ssh key everywhere in `~/.ssh/config`:

```
$ cat ~/.ssh/config
...
Match host github.com user org-132020358,org-132020684,org-132020707,org-127256988,org-132020694,org-127349224
  ProxyCommand none
  IdentityFile %d/.ssh/%u_at_linkedin.com_ssh_key
```

Solution. Create an alias for my personal ssh key for my personal GitHub repo, so it does not conflict with work's ssh key. 

Article: [How do I configure git to use multiple SSH keys for different accounts](https://superuser.com/questions/1628183/how-do-i-configure-git-to-use-multiple-ssh-keys-for-different-accounts) 


1. Before I do anything, ensure my private id_rsa key is added to the keychain:

	```
	$ ssh-add ~/.ssh/id_rsa
	Enter passphrase for /Users/gmcmilla/.ssh/id_rsa: 
	Identity added: /Users/gmcmilla/.ssh/id_rsa (gmcmillan100@gmail.com)
	$ ssh-add -l
	4096 SHA256:fqqsrkCl6ak0zhG1nAUCt9NYX4yJcqc3Wq1gymcLPpE gmcmillan100@gmail.com (RSA)
	```

2. Create a custom ssh config file. LinkedIn does not allow me to edit `~/.ssh/config`, so all customizations must go in a separate custom file.

	```
	touch ~/.ssh/config.custom
	vi ~/.ssh/config.custom
	```

3. Add a github alias (named `github-personal`) that points to my personal SSH key IdentityFile at `~/.ssh/id_rsa`:

	```
	Host github-personal
	   IdentityFile ~/.ssh/id_rsa
	   User git
	   HostName github.com
	   UseKeychain yes
	```

	The user must be `git`, and the HostName must be `github.com`.

4. Identify the origin setting inside my personal repo.

	To see which remote servers you have configured, run the `git remote` command. It lists the shortnames of each remote handle you’ve specified. If you’ve cloned your repository, you should at least see `origin`. That is the default name Git gives to the server you cloned from:

	```
	$ cd /Users/gmcmilla/docs
	$ git remote
	origin
	```

	You can also specify `-v`, which shows you the URLs that Git has stored for the shortname to be used when reading and writing to that remote:

	```
	$ git remote -v
	origin	git@github.com:gmcmillan100/docs.git (fetch)
	origin	git@github.com:gmcmillan100/docs.git (push)
	```

	In Git, `origin` is a shorthand name for the remote repository that a project was originally cloned from. More precisely, it is used instead of that original repository's URL - and thereby makes referencing much easier. Remotes are simply an alias that store the URL of repositories. You can see what URL belongs to each remote by using `git remote -v`.


5. Change the remote origin to use the new SSH alias:

	```
	$ git remote set-url "origin" "github-personal:gmcmillan100/docs.git"
	```

	Verify it changed:

	```
	$ git remote -v
	origin	github-personal:gmcmillan100/docs.git (fetch)
	origin	github-personal:gmcmillan100/docs.git (push)
	```

	The next time I `git push`, the alias will be used (see `github-personal`):

	```
	$ git push
	Enumerating objects: 5, done.
	Counting objects: 100% (5/5), done.
	Delta compression using up to 16 threads
	Compressing objects: 100% (3/3), done.
	Writing objects: 100% (3/3), 933 bytes | 933.00 KiB/s, done.
	Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
	remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
	To github-personal:gmcmillan100/docs.git
	   c1e5cd9..99d1978  master -> master
	```

6. Troubleshooting no identity and no keychain

	During a `git push`, I noticed my work permissions reverted and started overriding my personal account again:

	```
	$ git push
	ERROR: Permission to gmcmillan100/docs.git denied to gmcmilla_LinkedIn.
	fatal: Could not read from remote repository.
	```

	There was no personal id_rsa key identity in my keychain. It got lost somehow. Maybe LinkedIn SysOps reset it.

	```
	$ ssh-add -l
	The agent has no identities.
	```
	So I added it back in:

	```
	$ ssh-add ~/.ssh/id_rsa
	Enter passphrase for /Users/gmcmilla/.ssh/id_rsa: 
	Identity added: /Users/gmcmilla/.ssh/id_rsa (gmcmillan100@gmail.com)
	$ ssh-add -l
	4096 SHA256:fqqsrkCl6ak0zhG1nAUCt9NYX4yJcqc3Wq1gymcLPpE gmcmillan100@gmail.com (RSA)
	```

	Then, `git push` in my `docs` repo began working again:

	```
	$ cd docs
	$ git push
	Enumerating objects: 7, done.
	Counting objects: 100% (7/7), done.
	Delta compression using up to 16 threads
	Compressing objects: 100% (4/4), done.
	Writing objects: 100% (4/4), 806 bytes | 806.00 KiB/s, done.
	Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
	remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
	To github-personal:gmcmillan100/docs.git
	5b35e52..acac7c6  master -> master
	```

If it's still not working, do this:

1. Remove the identities. Note this will also delete my LinkedIn work keys (add back later):

	```
	$ ssh-add -D
	All identities removed.
	```

2. Re-add my personal keys:

	```
	$ ssh-add ~/.ssh/id_rsa
	Enter passphrase for /Users/gmcmilla/.ssh/id_rsa: 
	Identity added: /Users/gmcmilla/.ssh/id_rsa (gmcmillan100@gmail.com)
	```

3. Test by doing a git push again:

	```
	$ git push
	```

Note doing `ssh-add -D` also deletes my LinkedIn work keys. Do this to add them back in:

```
$ ssh-add ~/.ssh/gmcmilla_at_linkedin.com_ssh_key
Enter passphrase for /Users/gmcmilla/.ssh/gmcmilla_at_linkedin.com_ssh_key: 
Identity added: /Users/gmcmilla/.ssh/gmcmilla_at_linkedin.com_ssh_key (/Users/gmcmilla/.ssh/gmcmilla_at_linkedin.com_ssh_key)
 ```

Now I test my work ssh key against internal github:

```
$ ssh -T git@github.com
Hi gmcmilla_LinkedIn! You've successfully authenticated, but GitHub does not provide shell access.

```

Withing 24 hours, Linkedin corp might overwrite my personal keys again.

# Resources

GitHub Pages, https://pages.github.com/

Markdown reference, https://en.support.wordpress.com/markdown-quick-reference/
