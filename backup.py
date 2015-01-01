#!/usr/bin/python
# -*- coding: utf-8 -*-


from shell import Shell
import time
import sys

defalut_commit_message = 'Backup at ' + time.ctime()

cmd_git_add = 'git add --all'
cmd_git_commit = 'git commit -m "{msg}"'.format(msg=defalut_commit_message)
cmd_git_push = 'git push origin gh-pages'

sh = Shell()


def git_add():
    sh.run(cmd_git_add)
    if sh.code == 0:
        print('[√ add]')
        return True
    exit(sh.errors())


def git_commit(msg=defalut_commit_message):
    sh.run(cmd_git_commit.format(msg=msg))
    if sh.code == 0:
        print('[√ commit]')
        return True
    # nothing to commit
    if sh.code == 1:
        print(sh.output())
        return True
    exit(sh.errors())


def git_push():
    sh.run(cmd_git_push)
    if sh.code == 0:
        print('√ push')
        return True
    exit(sh.errors())


def main():
    if len(sys.argv) > 1 and sys.argv[1] == 'push':
        git_push()
        return
    git_add() and git_commit() and git_push()


if __name__ == '__main__':
    main()

