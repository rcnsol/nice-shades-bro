import { SerialPort } from 'serialport';

export class CentronicSerial {
  private device_path = '';
  private serial_port: SerialPort | undefined = undefined;

  constructor(device: string) {
    this.device_path = device;

    try {
      this.serial_port = this.connect_cusb();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }

  /**
   * This function opens a serial connection to the Centronic USB device.
   */
  connect_cusb() {
    return new SerialPort({
      path: this.device_path || '/dev/tty-usbserial1',
      baudRate: 57600,
    });
  }
}
