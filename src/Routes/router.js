var router = require('express').Router();

router.use(require('./Routes_Secretaria/routes.secretaria.ruta'));
router.use(require('./Routes_Secretaria/routes.secretaria.barrio'));
router.use(require('./Routes_Secretaria/routes.secretaria.empresa'));
router.use(require('./Routes_Secretaria/routes.secretaria.familia'));
router.use(require('./Routes_Secretaria/routes.secretaria.guarderia'));
router.use(require('./Routes_Secretaria/routes.secretaria.institucion'));
router.use(require('./Routes_Secretaria/routes.secretaria.localidad'));
router.use(require('./Routes_Secretaria/routes.secretaria.parvulos'));
router.use(require('./Routes_Secretaria/routes.secretaria.nivel_socioeconomico'));
router.use(require('./Routes_Secretaria/routes.secretaria.ruta_barrio',   ));
router.use(require('./Routes_Sistemas/routes.sistemas.empleado'));
router.use(require('./Routes_Sistemas/routes.sistemas.enfermedad_pacientes'));
router.use(require('./Routes_Sistemas/routes.sistemas.enfermedad'));
router.use(require('./Routes_Sistemas/routes.sistemas.estudiante'));
router.use(require('./Routes_Sistemas/routes.sistemas.historia_clinica'));
router.use(require('./Routes_Sistemas/routes.sistemas.jornada'));
router.use(require('./Routes_Sistemas/routes.sistemas.modalidad_estudio'));
router.use(require('./Routes_Sistemas/routes.sistemas.persona'));
router.use(require('./Routes_Sistemas/routes.sistemas.tipo_habitacion'));

module.exports = router;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
