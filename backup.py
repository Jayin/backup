#!/usr/bin/python
# -*- coding: utf-8 -*-

"""
自动git:add commit push
"""

from shell import Shell, CommandError
import time
import sys

defalut_commit_message = 'Backup at ' + time.ctime()

cmd_git_add = 'git add --all'
cmd_git_commit = 'git commit -m "{msg}"'.format(msg=defalut_commit_message)
cmd_git_push = 'git push origin gh-pages'

sh = Shell()


def error_exit(errors):
    for line in errors:
        print(line)
    exit()


def git_add():
    sh.run(cmd_git_add)
    if sh.code == 0:
        print('[√ add]')
        return True
    error_exit(sh.errors())


def git_commit(msg=defalut_commit_message):
    sh.run(cmd_git_commit.format(msg=msg))
    if sh.code == 0:
        print('[√ commit]')
        return True
    # nothing to commit
    if sh.code == 1:
        print(sh.output())
        return True
    error_exit(sh.errors())


def git_push():
    sh.run(cmd_git_push)

    if sh.code == 0:
        print('[√ push]')
        return True
    error_exit(sh.errors())


def main():
    #add -> commit
    if len(sys.argv) > 1 and sys.argv[1] == 'commit':
        git_add() and git_commit()
        return
    #push only
    if len(sys.argv) > 1 and sys.argv[1] == 'push':
        git_push()
        return
    #add -> commit -> push
    git_add() and git_commit() and git_push()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('')
        print('[× keyboard interrupt] ')
    except CommandError as ce:
        print('')
        print('[' + ce.message + ']')
