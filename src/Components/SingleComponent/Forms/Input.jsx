/* eslint-disable jsx-a11y/label-has-associated-control */
import cssClass from './Input.module.scss';

const Input = (props) => {
    const {
        label = 'label text',
        placeholder = 'palceholder text',
        id = 'unique id',
        type = 'text',
    } = props;
    return (
        <div className={cssClass.inputGroup}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;
