import { useEffect, useState } from "react";

export default function SystemInfoOverlay() {
  const [info, setInfo] = useState({
    userAgent: "",
    platform: "",
    language: "",
    screen: "",
    timezone: "",
    time: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString();
      setInfo({
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        time: timeStr,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex cursor-default opacity-20 hover:opacity-70 transition-all duration-300 [writing-mode:vertical-rl]
        [text-orientation:upright] text-start"
    >
      <div className="fixed top-10 right-3 flex flex-col  text-[12px] ">
        <div>Platform: {info.platform}</div>
        <div>Lang: {info.language}</div>
        <div>Screen: {info.screen}</div>
        <div>Timezone: {info.timezone}</div>
        <div>Time: {info.time}</div>
        <div className="h-[100px] bg-primary w-[1px] fixed top-11 right-2"></div>
        <div className="h-[200px] bg-primary w-[1px] fixed top-11 right-1"></div>
      </div>
    </div>
  );
}
