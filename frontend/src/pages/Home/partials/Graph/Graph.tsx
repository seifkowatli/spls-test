import { Container, Graphics, Stage } from '@pixi/react';
import { useEffect, useState } from 'react';
import { useAppState } from '~/providers';

const Graph = () => {
  
  const [progress, setProgress] = useState(0);
  const {appState : {startDrawing} , setAppState} = useAppState()

  useEffect(() => {
    let animationFrameId;

    const animateDrawing = (startTimestamp) => {
      const duration = 2000; // Animation duration in milliseconds
      const elapsed = Date.now() - startTimestamp;
      const currentProgress = Math.min(1, elapsed / duration);

      setProgress(currentProgress);

      if (currentProgress < 1) {
        animationFrameId = requestAnimationFrame((timestamp) => animateDrawing(startTimestamp || timestamp));
      } else {
        setAppState((prevState) => ({
          ...prevState,
          startDrawing : false
        }));
      }
    };

    if (startDrawing) {
      animateDrawing(Date.now());
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [startDrawing]);

  const drawExponentialCurve = (g) => {
    const startX = 50;
    const startY = 440;
    const controlX1 = 100;
    const controlY1 = 440;

    const controlX2 = 650;
    const controlY2 = 440;
    
    const endX = 700;
    const endY = 50;


    // Set line style (2 pixels wide and blue color)
    g.lineStyle(2, 0xe3397d);

    // Move the graphics cursor to the starting point of the line
    g.moveTo(startX, startY);

    // Calculate the current position based on the progress
    const t = progress;
    const oneMinusT = 1 - t;
    const currentX =
      oneMinusT ** 3 * startX + 3 * oneMinusT ** 2 * t * controlX1 + 3 * oneMinusT * t ** 2 * controlX2 + t ** 3 * endX;
    const currentY =
      oneMinusT ** 3 * startY + 3 * oneMinusT ** 2 * t * controlY1 + 3 * oneMinusT * t ** 2 * controlY2 + t ** 3 * endY;

    // Draw a dot at the current position
    g.beginFill(0xe3397d);
    g.drawCircle(currentX, currentY, 5);
    g.endFill();
  };

  return (
    <div>
      <Stage width={800} height={500} options={{ backgroundColor: 0x0f1217 }}>
        <Container>
          <Graphics draw={(g) => drawExponentialCurve(g)} />
        </Container>
      </Stage>
    </div>
  );
};


export default Graph;