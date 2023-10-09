const HighlightFunction = (props) => {
    const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5, 
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('highlight');
                entry.target.style.backgroundPosition = 'left';
            } else {
                entry.target.classList.remove('highlight');
                entry.target.style.backgroundPosition = 'right';
            }
        })
    }, options)

  
    props.forEach((ref) => {
        if (ref.current) {
            observer.observe(ref.current);
        }
    })

    return () => {
        observer.disconnect();
    };
}

export default HighlightFunction