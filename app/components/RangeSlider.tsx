const [range, setRange] = useState([0, 100]);

return (
  <RangeSlider
    value={range}
    onChange={setRange}
    min={0}
    max={duration} // from the loaded audio file
  />
);
