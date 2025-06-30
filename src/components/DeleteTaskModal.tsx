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
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className='modal-buttons'>
          <button className='modal-button confirm' onClick={onConfirm}>
            Delete task
          </button>
          <button className='modal-button cancel' onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}
