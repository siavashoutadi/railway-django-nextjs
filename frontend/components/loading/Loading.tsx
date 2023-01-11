export interface ILoading {}

const Loading: React.FC<ILoading> = ({}) => {
  return (
    <div className="container fixed top-1/2 z-50 mx-auto flex justify-center">
      <div className="mr-4 h-3 w-3 animate-ping rounded-full bg-green-600"></div>
      <div className="mr-4 h-3 w-3 animate-ping rounded-full bg-green-600"></div>
      <div className="h-3 w-3 animate-ping rounded-full bg-green-600"></div>
    </div>
  );
};

export default Loading;
