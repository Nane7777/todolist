import { HeaderMenu } from './components/HeaderMenu';
import AppRoutes from './Routes';

export type TaskItem = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  detailed: boolean;
};

function App() {
  return (
    <div>
      <div>
        <HeaderMenu />
      </div>
      <div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
