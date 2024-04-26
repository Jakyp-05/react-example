import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { YouTube, WhatsApp } from '@mui/icons-material'; 

function Footer() {
  return (
    <footer>
        <Container maxWidth='xl'>
            <Grid container sx={{display: 'flex',justifyContent: 'space-between'}} spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant='h4'>Tenders.kg</Typography>
                    <div> 
                        <start style={{display: 'flex', alignItems: 'center', gap: '20px'}}> 
                            <YouTube style={{color: 'red', fontSize: 40}}/>
                            <WhatsApp style={{color: 'green', fontSize: 40}}/>
                        </start>
                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <MailOutlineIcon />
                            <Typography variant='p'>info@tenders.kg</Typography>
                        </div> 
                    </div> 
                    <Typography variant='p'>© Tenders.kg - Все права защищены</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant='h4'>Полезные ссылки</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Мы запустили платную SMS рассылку, информация о подключении доступна <a href="#">здесь</a>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Поставщики товаров и услуг могут  <a href="#">"Подписаться на уведовление"</a> для рассылки новых интересующих поставщиков объновлений
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Typography variant='h4'>Узнать больше</Typography>
                    <Typography variant="h6" gutterBottom>
                        Служба поддержки
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Политика конфиденциальности 
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        О нас
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Пользовательское соглашение 
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </footer>
  )
}

export default Footer
