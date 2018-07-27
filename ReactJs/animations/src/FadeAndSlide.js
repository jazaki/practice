import React from 'react'
import Transition from 'react-transition-group/Transition'

function FadeAndSlideTransition ({children, duration, in: inProp}) {
    const defaultStyle = {
        transition: `${duration}ms ease-in`,
        transitionProperty: 'opacity, transform'
    }

    const transitionStyles = {
        entering: {
            opacity: 0,
            transform: 'translateY(-10%)'
        },
        // Transition to component being visible and having its position reset. 
        entered: {
            opacity: 1,
            transform: 'translateY(0)'
        },
        // Fade element out and slide it back up on exit.
        exiting: {
            opacity: 0,
            transform: 'translateY(-10%)'
        }
    }

    return(
        <Transition in={inProp} timeout={{
            enter: 0,
            exit: duration
        }}>
        {
            (status) => {
                if(status === 'exited'){
                    return null
                }

                const currentStyles = transitionStyles[status];
                return React.cloneElement(children, {
                    style: Object.assign({}, defaultStyle, currentStyles)
                })
            }
        }
        </Transition>
    )
}

export default FadeAndSlideTransition;