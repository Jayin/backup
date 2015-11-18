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

#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <time.h>

int main(void)
{
	int on;
	int led_no;
	int fd;

	int i, j;

	int buttons_fd;
	char buttons[8] = {'0', '0', '0', '0', '0', '0', '0', '0'};

	fd = open("/dev/leds0", 0);
	if (fd < 0) {
		fd = open("/dev/leds", 0);
	}
	if (fd < 0) {
		perror("open device leds");
		exit(1);
	}

	for (i = 0; i < 4; ++i)
	{
		/* code */
		ioctl(fd, 0, i);
	}

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
				
				if(i < 4) {
					ioctl(fd, 1, i);
				} else {
					ioctl(fd, 0, i-4);
				}

				count_of_changed_key++;
			}
		}
		if (count_of_changed_key) {
			printf("\n");
		}
		
		
	}

	close(fd);
	close(buttons_fd);
	return 0;
}
