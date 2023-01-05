export interface ILoading {
}

const Loading: React.FC<ILoading> = ({}) => {
  return (
        <div className='container mx-auto flex justify-center fixed top-1/2 z-50'>
            <div className="h-3 w-3 bg-green-600 rounded-full mr-4 animate-ping"></div>
            <div className="h-3 w-3 bg-green-600 rounded-full mr-4 animate-ping"></div>
            <div className="h-3 w-3 bg-green-600 rounded-full animate-ping"></div>
        </div >
    );

};

export default Loading;
