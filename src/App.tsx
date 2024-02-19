import RoleTable from './components/react-rbac/React-rbac';

function App() {
  return (
    <div style={{ padding: '20%' }}>
      <RoleTable
        actions={['get', 'create', 'update']}
        roles={['domain', 'user', 'role']}
        specialChar={'_'}
        rowSelectAll={false}
        rowSelectAllLabel={'All'}
        onRbacChange={(value:string[])=>console.log(value,'value')}
      />
    </div>
  );
}

export default App;
