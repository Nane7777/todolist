import ReactDOM from 'react-dom';

type DeleteTaskModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteTaskModal({
  title,
  message,
  onConfirm,
  onCancel,
}: DeleteTaskModalProps) {
  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[1000]'>
      <div className='bg-white p-6 rounded-lg w-[90%] max-w-[400px] shadow-md flex flex-col gap-4 text-center'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p>{message}</p>
        <div className='flex justify-between gap-3 mt-2'>
          <button
            onClick={onConfirm}
            className='flex-1 px-3 py-2 rounded cursor-pointer font-bold border-0 bg-[#bd1613] text-white hover:brightness-75 transition'
          >
            Delete task
          </button>
          <button
            onClick={onCancel}
            className='flex-1 px-3 py-2 rounded cursor-pointer font-bold border-0 bg-gray-300 hover:brightness-75 transition'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}
