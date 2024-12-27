```javascript
function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('some-api')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>{data?.name ?? 'No data available'}</Text>
      )}
    </View>
  );
}
```