import ApplyFormFirst from '../../components/ApplyFormFirst';
import IntroSection from '../../components/IntroSection';
import Card from '../../components/ui/Card';
import classes from './apply-page-first.module.css';

const DATA_APPLY_PAGE = {
  id: 2,
  title: 'Create your own Garden',
  image: 'images/apply-first-pic.jpg',
  description: `Apply,        
    get some fresh products,
    and connect to your neighborhood`,
};

function ApplyPageFirst() {
  return (
    <div className={classes.sections}>
      {/* introduction */}

      <IntroSection
        id={DATA_APPLY_PAGE.id}
        title={DATA_APPLY_PAGE.title}
        image={DATA_APPLY_PAGE.image}
        description={DATA_APPLY_PAGE.description}
        btn={false}
      />
      <Card>
        <ApplyFormFirst />
      </Card>
    </div>
  );
}

export default ApplyPageFirst;
