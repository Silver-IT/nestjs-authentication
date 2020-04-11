import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "adfcontroll",
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
  
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',
  
    migrations: [__dirname + '/migration/**/*{.ts,.js}'],
    cli: {
      // Location of migration should be inside src folder
      // to be compiled into dist/ folder.
      migrationsDir: 'src/migration',
    },
  
}

export = config;