import  React  from  'react';
import { Button } from 'reactstrap';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
      <div  className="GenerateEmployee">
        <Button color="success" onClick={selectEmployee}>Get employee</Button>
      </div>
    );
};

export  default  GenerateEmployee;