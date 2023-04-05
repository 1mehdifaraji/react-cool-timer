declare module "react-cool-timer" {
  interface TimerProps {
    timeInterval: number;
    onEndReached?: () => void;
  }

  interface TimerReturn {
    timeLeft: number;
  }

  export function useTimer(props: TimerProps): TimerReturn {}
}
