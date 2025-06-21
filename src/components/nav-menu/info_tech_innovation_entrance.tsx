import Image from 'next/image';
import classnames from 'classnames';
import { SimpleLink } from '@ones-cn/ui';
import styles from './info_tech_innovation_entrance.module.scss';
import { AppType } from '@ones-cn/types/enums';

export const InfoTechInnovationEntrance = ({ className }: { className?: string }) => {
  return (
    <SimpleLink
      href="/solutions/capability/information-technology-innovation"
      noDefaultColor
      className={classnames('oac-rounded-full', styles['entrance-container'], className)}
      appType={AppType.WEB}
    >
      <>
        <Image
          width={21}
          height={24}
          alt=""
          src={require('../images/info-tech-innovation-icon.svg')}
          unoptimized
          className="oac-mr-1"
        />
        信创
      </>
    </SimpleLink>
  );
};
