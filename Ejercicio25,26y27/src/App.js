import TODOList from "./components/TODOList";
import { StoreProvider } from "./store/storeProvider";
import styles from './style/styled.module.css'

function App() {
  return (
    <div className={styles.container}>
      <StoreProvider>
        <TODOList />
      </StoreProvider>
    </div>
  );
}

export default App;
