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


#include <termios.h>
#include <unistd.h>

#define PWM_IOCTL_SET_FREQ		1
#define PWM_IOCTL_STOP			0

static int fd = -1;
static void close_buzzer(void);
static void open_buzzer(void)
{
	fd = open("/dev/pwm", 0);
	if (fd < 0) {
		perror("open pwm_buzzer device");
		exit(1);
	}

	// any function exit call will stop the buzzer
	atexit(close_buzzer);
}

static void close_buzzer(void)
{
	if (fd >= 0) {
		ioctl(fd, PWM_IOCTL_STOP);
		if (ioctl(fd, 2) < 0) {
			perror("ioctl 2:");
		}
		close(fd);
		fd = -1;
	}
}

static void set_buzzer_freq(int freq)
{
	// this IOCTL command is the key to set frequency
	int ret = ioctl(fd, PWM_IOCTL_SET_FREQ, freq);
	if(ret < 0) {
		perror("set the frequency of the buzzer");
		exit(1);
	}
}
static void stop_buzzer(void)
{
	int ret = ioctl(fd, PWM_IOCTL_STOP);
	if(ret < 0) {
		perror("stop the buzzer");
		exit(1);
	}
	if (ioctl(fd, 2) < 0) {
		perror("ioctl 2:");
	}
}



int main(void)
{

	int freq = 1000 ;
	
	open_buzzer();

	printf( "\nBUZZER TEST ( PWM Control )\n" );
	printf( "Press No. 012/345 button to increase/reduce the frequency of the BUZZER\n" ) ;
	printf( "Press 'No. 6/7' button to open/stop buzzer\n\n" );
	printf( "Press 'No. 0' key to Exit this program\n\n" );

	set_buzzer_freq(freq);
	printf( "\tFreq = %d\n", freq );

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

				switch(i) {
				case 0:
					if( freq < 20000 )
						freq += 10;
					break;
				case 1:
					if( freq < 20000 )
						freq += 20;
					break;
				case 2:
					if( freq < 20000 )
						freq += 30;
					break;
				case 3:
					if( freq > 11)
						freq -= 10;
					break;
				case 4:
					if( freq > 21)
						freq -= 20;
					break;
				case 5:
					if( freq > 31)
						freq -= 30;
					break;
				case 6:
					fd = -1;
					freq = 1000;
					open_buzzer();
					set_buzzer_freq(freq);
					break;
				case 7:
					stop_buzzer();
					break;

				default:
					break;
				}

				set_buzzer_freq(freq);

				count_of_changed_key++;
			}
		}
		if (count_of_changed_key) {
			printf("\n");
		}
		
		
	}

	close_buzzer();
	close(buttons_fd);
	return 0;
}
