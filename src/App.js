import './App.css';
import DropDown from './components/dropdown';
import MOCK_OPTIONS from './constants';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<DropDown
					value={[
						{
							value: 'pakistan',
							label: 'Pakistan',
						},
						{
							value: 'sri-lanka',
							label: 'Sri Lanka',
						},
					]}
					readOnly={false}
					options={MOCK_OPTIONS}
				/>
			</div>
		</div>
	);
}

export default App;
