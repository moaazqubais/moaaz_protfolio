export default function PlayButton() {
  return (
    <div className="absolute left-1/2 top-[43%] z-30 -translate-x-1/2 -translate-y-1/2">
      <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-white text-center shadow-[0_12px_35px_rgba(255,255,255,0.08)] md:h-[112px] md:w-[112px]">
        <span className="text-[13px] font-extrabold leading-[1.1] tracking-tight text-black">
          PLAY
          <br />
          REEL
        </span>
      </div>
    </div>
  );
}