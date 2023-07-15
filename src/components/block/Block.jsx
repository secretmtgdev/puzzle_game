import './Block.css';

export const Block = ({location, value}) => (
    <div className='block'>
        {value} - ({location.row}, {location.col})
    </div>
);

export default Block;
