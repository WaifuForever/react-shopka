import clothes from '../../assets/filterBar/clothes.svg';
import electrical from '../../assets/filterBar/electrical.svg';
import entertainment from '../../assets/filterBar/entertainment.svg';
import garden from '../../assets/filterBar/garden.svg';
import kitchen from '../../assets/filterBar/kitchen.svg';
import mother from '../../assets/filterBar/mother.svg';
import music from '../../assets/filterBar/music.svg';
import pets from '../../assets/filterBar/pets.svg';
import sports from '../../assets/filterBar/sports.svg';
import toys from '../../assets/filterBar/toys.svg';
import travel from '../../assets/filterBar/travel.svg';
import vintage from '../../assets/filterBar/travel.svg';
import './styles.scss';

interface Props {
 
        //icon: React.SVGProps<SVGSVGElement> | React.SVGProps<SVGSVGElement>[];
        description: string;
        icon: string;
    
}

const FilterButton: React.FC<Props> = ({ icon, description }) => {
    return (
        <div className="filterButton">
            <img src={icon}/>
            <div className="pd-2 font-3">{description}</div>
        </div>
    );
};

const FilterBar = () => {
    return (
        <div className="filterBar_container pd-inline-10 mg-block-start-4">
            <FilterButton icon={clothes} description={"Clothes"}/>
            <FilterButton icon={entertainment} description={"Entertainment"}/>
            <FilterButton icon={music} description={"Music"}/>
            <FilterButton icon={sports} description={"Sport & Lifestyle"}/>
            <FilterButton icon={pets} description={"Pets"}/>
            <FilterButton icon={kitchen} description={"Kitchen & Accessories"}/>
            <FilterButton icon={travel} description={"Travel Equipment"}/>
            <FilterButton icon={garden} description={"Growing & Garden"}/>
            <FilterButton icon={electrical} description={"Electrical Tools"}/>
            <FilterButton icon={mother} description={"Mother Care"}/>
            <FilterButton icon={toys} description={"Toys"}/>
            <FilterButton icon={vintage} description={"Vintage"}/>
        </div>
    );
};

export default FilterBar;
