#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/select.h>
#include <sys/time.h>
#include <errno.h>

void saySomeThing(int index)
{
	switch(index) {
		case 0:
			printf("GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. \n");
			break;
		case 1:
			printf("Over eight million people use GitHub to build amazing things together.\n" );
			break;
		case 2:
			printf("With the collaborative features of GitHub.com,our desktop apps, and GitHub Enterprise, it has never been easier for individuals and teams to write better code, faster. \n");
			break;
		case 3:
			printf("Originally founded by Tom Preston-Werner, Chris Wanstrath,and PJ Hyett to simplify sharing code, GitHub has grown into the world's largest code host. \n");
			break;
		case 4:
			printf("GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. \n");
			break;
		case 5:
			printf("Over eight million people use GitHub to build amazing things together.\n" );
			break;
		case 6:
			printf("With the collaborative features of GitHub.com, our desktop apps, and GitHub Enterprise, it has never been easier for individuals and teams to write better code, faster. \n");
			break;
		case 7:
			printf("Originally founded by Tom Preston-Werner, Chris Wanstrath, and PJ Hyett to simplify sharing code, GitHub has grown into the world's largest code host. \n");
			break;
		default:
			printf("Say something.\n");
	}
	
}

int main(void)
{
	int buttons_fd;
	char buttons[8] = {'0', '0', '0', '0', '0', '0', '0', '0'};

	buttons_fd = open("/dev/buttons", 0);
	if (buttons_fd < 0) {
		perror("open device buttons");
		exit(1);
	}

	for (;;) {
		char current_buttons[8];
		int count_of_changed_key;
		int i;
		if (read(buttons_fd, current_buttons, sizeof current_buttons) != sizeof current_buttons) {
			perror("read buttons:");
			exit(1);
		}

		for (i = 0, count_of_changed_key = 0; i < sizeof buttons / sizeof buttons[0]; i++) {
			if (buttons[i] != current_buttons[i]) {
				buttons[i] = current_buttons[i];
				printf("%skey %d is %s", count_of_changed_key? ", ": "", i+1, buttons[i] == '0' ? "up" : "down");
				saySomeThing(i);
				count_of_changed_key++;
			}
		}
		if (count_of_changed_key) {
			printf("\n");
		}
		
		
	}

	close(buttons_fd);
	return 0;
}

