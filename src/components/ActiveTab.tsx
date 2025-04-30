import HomeTab from './HomeTab';
import ProverbsTab from './ProverbsTab';
import PsalmsTab from './PsalmsTab';

const ActiveTab = ({ activeTab }) => {
    const renderTabContent = () => {
        switch (activeTab) {
          case 'home':
            return <HomeTab />;
          // case 'psalms':
          //   return <PsalmsTab />;
          case 'proverbs':
            return <ProverbsTab />;
          default:
            return <HomeTab />;
        }
      };
  return (renderTabContent());
}

export default ActiveTab