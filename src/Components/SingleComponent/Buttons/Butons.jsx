import Classes from './Butons.module.scss';

const Butons = (props) => {
    const { Size, Text, Type } = props;
    return (
        <button
            className={`${Classes[Size]} ${Classes[Type]}`}
            type="button"
            onClick={() => console.log('clicked')}
        >
            {Text}
        </button>
    );
};

export default Butons;
