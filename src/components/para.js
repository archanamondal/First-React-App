import useCurrentWindow from '../hooks/useCurrentWindow';

const Para = () => {
  const windowWidth = useCurrentWindow();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3px',
        marginBottom: '30px',
        fontWeight: 'inherit',
        fontFamily: "'Rubik Beastly', cursive",
      }}>
      {windowWidth > 480 ? (
        <p>
          Email address used soley for shoe drop notifications. Scout's honor.
        </p>
      ) : (
        <>
          <p>Email address used soley for shoe drop.</p>
          <p>notifications. Scout's honor.</p>
        </>
      )}
    </div>
  );
};

export default Para;
