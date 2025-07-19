import { VideosSection } from "../sections/videos-section";

export const StudioView = () => {
  return (
    <div className="flex flex-col gap-y-6 pt-2.5">
      <div className="px-4">
        <h1 className="text-2xl font-bold">채널 콘텐츠</h1>
        <p className="text-xs text-muted-foreground">
          채널 콘텐츠와 동영상 관리하기
        </p>
      </div>
      <VideosSection />
    </div>
  );
};
