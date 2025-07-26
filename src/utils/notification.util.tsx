import { Toast, toast } from "react-hot-toast";

const notification = {
  success: (message: string, avatar?: string, duration = 4000) => {
    toast(
      (t: Toast) => (
        <div key={t.id} className={`w-[320px] flex py-2 font-poppins `}>
          <div className="flex-1 w-0">
            <div className="flex items-start">
              {avatar && (
                <div className="flex-shrink-0 pt-0.5">
                  <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                </div>
              )}
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-primary">Success</p>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-50">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg px-2 flex items-center justify-center text-sm font-medium text-secondary hover:text-primary focus:outline-none focus:ring-0"
            >
              Close
            </button>
          </div>
        </div>
      ),
      {
        duration: duration,
        style: {
          border: "1px solid #dc0061",
          color: "#dc0061",
          marginBottom: "7px",
        },
      }
    );
  },
  error: (message: string, avatar?: string) => {
    toast(
      (t: Toast) => (
        <div key={t.id} className={`w-[320px] flex py-2 font-poppins`}>
          <div className="flex-1 w-0">
            <div className="flex items-start">
              {avatar && (
                <div className="flex-shrink-0 pt-0.5">
                  <img className="h-10 w-10 rounded-full" src={avatar} alt="" />
                </div>
              )}
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-secondary">Error</p>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-50">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg px-2 flex items-center justify-center text-sm font-medium text-secondary hover:text-gray-700 focus:outline-none focus:ring-0"
            >
              Close
            </button>
          </div>
        </div>
      ),
      {
        style: {
          border: "1px solid #dc0061",
          color: "#dc0061",
        },
      }
    );
  },
};

export default notification;
