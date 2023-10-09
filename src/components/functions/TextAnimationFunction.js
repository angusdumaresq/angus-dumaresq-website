const TextAnitmationFunction = (props) => {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-animation-in-view')
              observer.unobserve(entry.target) 
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
export default TextAnitmationFunction


