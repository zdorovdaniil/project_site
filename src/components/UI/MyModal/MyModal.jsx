import React from "react";
import classes from './MyModal.module.css';

//в это модальное окно мы можем помещать все что захотим
const MyModal = ({ children, visible, setVisible }) => {

    const rootClasse = [classes.myModal]

    if (visible) {
        rootClasse.push(classes.active)
    }

    return (
        // при нажатии на модальное окно, происходит ее закрытие
        <div className={rootClasse.join(' ')} onClick={() => setVisible(false)}>
            {/* // но если нажать на контентную часть модального окна событие закрытия отменяется */}
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default MyModal