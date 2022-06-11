import { useState } from "react";
import { Grid, Tooltip } from "@mui/material";
import useTranslation from "next-translate/useTranslation";

interface IGridFieldProps {
  name: string;
  value: string | number | undefined;
  hideValue?: boolean; // should the value be hidden by default
}
const GridField = ({ name, value, hideValue }: IGridFieldProps) => {

  const { t } = useTranslation('stats')

  // state to store currend censorState
  const [valueHidden, setValueHidden] = useState<boolean>(hideValue || false);


  // setValueHidden(true);
  // handle click on value
  const handleClick = () => {
    setValueHidden(!valueHidden);
  }

  return (
    <>
      <Grid item xs={6}>
        {name}
      </Grid>
      <Grid item xs={6} onClick={handleClick}>
        {valueHidden ?
          <Tooltip title={t('clickToReveal')}><span>{'*'.repeat(value?.toString().length || 0)}</span></Tooltip> :
          <>{value}</>
        }
      </Grid>
    </>
  )
}
export default GridField;