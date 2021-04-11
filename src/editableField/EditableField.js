import React, {useState} from 'react';
import './editable.css';
import editIcon from './img/edit.png';

const EditableField = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [value, setValue] = useState('Accounting Printer');
    const [textValue, setTextValue] = useState('');

    function onSave() {
        setValue(textValue);
        setModalOpen(false);
    }

    function onEdit() {
        setTextValue(value);
        setModalOpen(true);
    }

    function renderModal() {
        return (<div className="modal-wrapper">
            <div className="modal">
                <input type="text" onChange={(e) => setTextValue(e.target.value)} value={textValue}/>
                <div className="actions">
                <button className="toggle-button" onTouchEnd={onSave}>save</button>
                </div>
            </div>
      </div>);
    }

    return (
        <div className='field-wrapper'>
            <div className="editable-wrapper" style={{ opacity: isModalOpen ? '0.2' : '1'}}>
                <div className="value-field">{value}</div>
                <div><img src={editIcon} className="edit-icon" onTouchEnd={onEdit}/></div>
            </div>
            {isModalOpen && renderModal()}
        </div>
    );
}

export default EditableField;