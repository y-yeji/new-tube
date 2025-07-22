import { FormSection } from "../sections/form-section";

interface pageProps {
  videoId: string;
}

export const VideoView = ({ videoId }: pageProps) => {
  return (
    <div className="px-4 pt2.5 max-w-screen-lg">
      <FormSection videoId={videoId} />
    </div>
  );
};
