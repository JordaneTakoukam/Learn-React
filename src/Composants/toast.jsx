import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function createToast(title, type) {
    toast[type === 0 ? 'success' : type === 1 ? 'info' : 'error'](
        <div className="flex items-start text-black text-md">

            <div>
                <p className="text-sm ">{title}</p>
            </div>
        </div>,
        {
            closeButton: true,
            autoClose: 5000,

        }
    );
}



