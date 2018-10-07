import {Box, Flex} from 'rebass';
import {setQRInput, setQRInputType, setShowSettings} from 'redux/actions';

import Button from 'components/ui/Button';
import InputLabel from 'components/ui/InputLabel';
import React from 'react';
import Selector from 'components/ui/Selector';
import {connect} from 'react-redux';
import inputs from 'qr/inputs';

const QRInput = ({
  inputData,
  inputType,
  setQRInput,
  setQRInputType,
  setShowSettings,
}) => {
  const {fields, getInputString} = inputs[inputType];
  const data = inputData[inputType];
  return (
    <Flex flexDirection={['column', 'row']}>
      <Box mr={[0, 4]}>
        <Selector
          items={Object.values(inputs).map(({label, value}) => ({
            label,
            value,
          }))}
          onSelectItem={item => {
            setQRInputType(item.value);
          }}
          selectedItem={inputType}
        />
      </Box>
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          let data = {};
          fields.forEach(({id}) => {
            data[id] = e.target[id].value;
          });
          setQRInput(inputType, data, getInputString(data));
          setShowSettings(false);
        }}>
        <Flex alignItems="flex-end" flexDirection="column">
          {fields.map(({id, label, placeholder, type}) => (
            <InputLabel
              id={id}
              key={id}
              label={label}
              placeholder={placeholder}
              type={type}
              value={data ? data[id] : undefined}
            />
          ))}
          <Box mt={4}>
            <Button label="Spray it" type="submit" />
          </Box>
        </Flex>
      </form>
    </Flex>
  );
};

export default connect(
  ({qr}) => ({
    inputData: qr.inputData,
    inputType: qr.inputType,
  }),
  {setQRInput, setQRInputType, setShowSettings},
)(QRInput);
