class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      minutes: document.querySelector('span[data-value="mins"]'),
      seconds: document.querySelector('span[data-value="secs"]'),
    };
    this.timer();
  }

  timer() {
    this.intervalId = setInterval(() => {
      this.startTime = Date.now();
      this.time = this.targetDate.getTime() - this.startTime;

      this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);

      this.refs.days.textContent = String(this.days).padStart(2, '0');
      this.refs.hours.textContent = String(this.hours).padStart(2, '0');
      this.refs.minutes.textContent = String(this.minutes).padStart(2, '0');
      this.refs.seconds.textContent = String(this.seconds).padStart(2, '0');
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 20, 2020'),
});
