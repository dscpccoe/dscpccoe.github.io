import React,{useState} from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Collapse, CardBody} from 'reactstrap';




const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    marginTop:"35px",
    marginBottom:"35px",
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));






export const BlogCardDemo = React.memo(function BlogCard() {
  const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);

  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  

  return (
    <div className="projects " style={{minHeight:"75vh", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    
    <h1 className="text-center">Projects</h1>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://tse2.mm.bing.net/th?id=OIP.NdYMz_uvezscto_J6xRM2AHaHa&pid=Api&P=0&w=300&h=300'
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={'10 SEPT 2019'}
          heading={'Notification App'}
          body={
            'A Notification App for Computer department of Pimpri chinchwad college of engineering.'
          }
        />
        {/* <Button className={buttonStyles}>Read more</Button> */}
          <Button  className={buttonStyles} color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Read more</Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody >
              <p className={{contentStyles}}>
              An android apllication that would enable students to receive notifications about the happenings 
              in computer department.Students can update/add their achievements in the profile section which can 
              be viewed on their profile.This would indeed make the process of sending notices easier.'
              </p>

              </CardBody>
            </Card>
          </Collapse>
      </CardContent>
      
    </Card>


    
    </div>

    
  );
});

export default BlogCardDemo;