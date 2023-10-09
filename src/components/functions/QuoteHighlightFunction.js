const QuoteHighlightFunction = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
};

export default QuoteHighlightFunction;
