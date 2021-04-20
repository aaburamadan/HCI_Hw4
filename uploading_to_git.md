# Uploading to git

## Creating local git files

> - Initialized git using `git init` command.
> - Added 'node.ignore' to '.gitignore' file by using the following commands: `Command + shift + p` and enter `Add gitignore` then `node.gitignore`
>   - Note: don't forget to add the gitignore extension in VSCode.
> - Added all file to this new '.git' file using `git add .` command.
>   - You can remove files that you previous added using `git remove .` command.

## Creating a new branch

> - Commiting to master branch `git commit -m "name of your commit"`.
> - To preview all of your branches use the following command: `git branch`.
> - Created new branch called 'feature' using `git checkout -b feature` command.
> - Merging branch to master `git merge feature`
> - Switching to another branch `git switch name_of_branch`

> - (Optional) If you have multiple stages in your branch you can use `git merge feature --squash` to squash them into a single stage inside your current branch

## Saving your files without commiting to any branch

> - To save your 'work in progress' files in the gitfile without commiting to any branch, use the following command: `git stash -u`.
>   - To remove your saved 'work in progress' files use the following comamnd: `git stash pop`.
>   - Push your saved 'work in progress' files to current branch using the following command: `git stash push`.

## Pushing an existing repository from command line

> - `git remote add origin 'url_of_your_github_repo`
> - `git push -u origin master`
