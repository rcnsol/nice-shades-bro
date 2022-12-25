// <STX> and <ETX> for every single code being send
export const STX = 0x02;
export const ETX = 0x03;

export const DEFAULT_DEVICE_NAME =
  '/dev/serial/by-id/usb-BECKER-ANTRIEBE_GmbH_CDC_RS232_v125_Centronic-if00';
export const CODE_PREFIX = '0000000002010B'; // some code prefix 0-23 (24 chars) followed by the increment
export const CODE_SUFFIX = '000000'; // some code suffix right after the increment
export const CODE_21 = '021'; // some code "021" right after the unit ids
export const CODE_REMOTE = '02'; // centronic remote control used "02" while contralControl seem to use "01"

export const COMMAND_STOP = 0x10; // stop
export const COMMAND_UP = 0x20; // move up
export const COMMAND_UP2 = 0x21; // move up
export const COMMAND_UP3 = 0x22; // move up
export const COMMAND_UP4 = 0x23; // move up
export const COMMAND_UP5 = 0x24; // intermediate position "up"
export const COMMAND_DOWN = 0x40; // move down
export const COMMAND_DOWN2 = 0x41; // move down
export const COMMAND_DOWN3 = 0x42; // move down
export const COMMAND_DOWN4 = 0x43; // move down
export const COMMAND_DOWN5 = 0x44; // intermediate position "down" (sun protection)
export const COMMAND_PAIR = 0x80; // pair button press
export const COMMAND_PAIR2 = 0x81; // pair button pressed for 3 seconds (without releasing)
export const COMMAND_PAIR3 = 0x82; // pair button pressed for 6 seconds (without releasing)
export const COMMAND_PAIR4 = 0x83; // pair button pressed for 9 seconds (without releasing)

export const COMMAND_CLEARPOS = 0x90;
export const COMMAND_CLEARPOS2 = 0x91;
export const COMMAND_CLEARPOS3 = 0x92;
export const COMMAND_CLEARPOS4 = 0x93;
