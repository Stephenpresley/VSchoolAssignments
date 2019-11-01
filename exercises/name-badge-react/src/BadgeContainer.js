import React from 'react';
import Badge from './Badge';

const BadgeContainer = (props) => {
    const badgeMap = props.badgeArr.map( (badge, i) => <Badge key={i + badge.fName}
                                                            fName={badge.fName}
                                                            lName={badge.lName}
                                                            email={badge.email}
                                                            birthPlace={badge.birthPlace}
                                                            phone={badge.phone}
                                                            favFood={badge.favFood}
                                                            about={badge.about}
                                                            index={i}
                                                            />)
    return (
        <div>
            {badgeMap}
        </div>
    );
};

export default BadgeContainer;