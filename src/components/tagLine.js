import useCurrentWindow from '../hooks/useCurrentWindow';

const TagLine = () => {
  const windowWidth = useCurrentWindow();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
      }}>
      {windowWidth > 480 ? (
        <>
          <h1>Collectible Kicks for</h1>
          <h1>the digital age</h1>
          <p style={{ marginTop: '12px' }}>
            <strong>CryproSneaks</strong>
            {'\u2122'} are maticulouly handmade, digital shoes.
          </p>
        </>
      ) : (
        <>
          <h1>Collectible</h1>
          <h1>Kicks for the</h1>
          <h1>digital age</h1>
          <p style={{ marginTop: '12px' }}>
            <strong>CryproSneaks</strong>
            {'\u2122'} are maticulouly{' '}
          </p>
          <p> handmade, digital shoes.</p>
        </>
      )}
    </div>
  );
};

export default TagLine;
