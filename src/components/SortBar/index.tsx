interface Props {
    name: string;
}
const DropdownMenu: React.FC<Props> = ({name}) => {
    return <div>{name}</div>;
};

const SortBar = () => {
    return (
        <div>
            <DropdownMenu name='dsada'/>
        </div>
    );
};

export default SortBar;
